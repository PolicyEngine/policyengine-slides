'use client';

import React, { useEffect, useRef, useState } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function DataMethodologySlide() {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Load Mermaid script dynamically
    const loadMermaid = async () => {
      if (!(window as any).mermaid) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const mermaid = (window as any).mermaid;
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          primaryColor: '#1e3a8a',
          primaryTextColor: '#ffffff',
          secondaryColor: '#059669',
          tertiaryColor: '#7c3aed',
          fontSize: '64px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          clusterBorder: '#f97316',
          clusterBkg: '#e0e7ff',
        },
        flowchart: {
          nodeSpacing: 120,
          rankSpacing: 120,
          curve: 'linear',
          padding: 80,
          useMaxWidth: true,
        }
      });

      setIsLoaded(true);
    };

    loadMermaid();
  }, []);

  useEffect(() => {
    if (isLoaded && mermaidRef.current) {
      const renderDiagram = async () => {
        const mermaid = (window as any).mermaid;
        const diagramDefinition = `%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#1e3a8a','primaryTextColor':'#fff','primaryBorderColor':'#1e40af','lineColor':'#374151','secondaryColor':'#059669','tertiaryColor':'#7c3aed','fontSize':'64px','clusterBorder':'#f97316','clusterBkg':'#e0e7ff'}}}%%
graph TD
    subgraph src[" "]
        FRS["Family Resources Survey"]:::data
        SPI["Survey of Personal Incomes"]:::data
        WAS["Wealth and Assets Survey"]:::data
        LCFS["Living Costs and Food Survey"]:::data
        ETB["Effects of Taxes and Benefits"]:::data
        UC["Administrative Targets"]:::data
    end

    FRSCopy1["FRS Copy 1: with Impute High Income"]:::data
    FRSCopy2["FRS Copy 2: without Impute High Income"]:::data
    MergePoint["Stacking"]:::merge

    subgraph imp[" "]
        ImpConsumption("Impute Consumption"):::process
        ImpWealth("Impute Wealth"):::process
        ImpVAT("Impute VAT"):::process
        ImpServices("Impute Public Services"):::process
    end

    ImputedFRS["FRS with Imputed Variables"]:::data
    Uprate("Uprate to 2025"):::process
    Calibrate("Calibration & Reweighting (PyTorch)"):::process
    CalibratedFRS["Calibrated FRS 2025"]:::data

    FRS --> FRSCopy1
    FRS --> FRSCopy2
    SPI -.-> FRSCopy1
    FRSCopy1 --> MergePoint
    FRSCopy2 --> MergePoint
    MergePoint --> imp
    LCFS -.-> imp
    WAS -.-> imp
    ETB -.-> imp
    imp --> ImputedFRS
    ImputedFRS --> Uprate
    Uprate --> Calibrate
    UC --> Calibrate
    Calibrate --> CalibratedFRS

    classDef data fill:#1e3a8a,stroke:#1e40af,stroke-width:3px,color:#ffffff
    classDef process fill:#059669,stroke:#047857,stroke-width:3px,color:#ffffff
    classDef merge fill:#f8fafc,stroke:#94a3b8,stroke-width:1px,color:#000000`;

        try {
          const { svg } = await mermaid.render('mermaid-diagram', diagramDefinition);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;

            // Force orange color on cluster labels after rendering
            setTimeout(() => {
              const clusterTexts = mermaidRef.current?.querySelectorAll('.cluster text, .cluster tspan');
              clusterTexts?.forEach((text) => {
                text.setAttribute('fill', '#f97316');
                text.setAttribute('style', 'fill: #f97316 !important; font-weight: 700; font-size: 38px;');
              });
            }, 100);
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error);
        }
      };

      renderDiagram();
    }
  }, [isLoaded]);

  return (
    <>
      <Slide>
        <div className="w-full h-full flex flex-col">
          <SlideHeader>
            <SlideTitle>We build our dataset from six UK surveys</SlideTitle>
          </SlideHeader>

          <div className="flex-1 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)' }}>
            <div
              ref={mermaidRef}
              className="mermaid"
              style={{
                width: '80%',
                height: '65%'
              }}
            />
          </div>

          <div className="w-full flex justify-center pb-4" style={{ background: 'linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(true);
              }}
              className="bg-pe-teal hover:bg-pe-dark text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2"
              style={{ fontSize: '18px' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
              Fullscreen
            </button>
          </div>
        </div>
      </Slide>

      {isZoomed && (
        <div
          className="fixed inset-0"
          style={{
            background: 'white',
            zIndex: 99999
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsZoomed(false);
            }}
            className="fixed top-4 right-4 hover:opacity-70 transition-opacity duration-200"
            style={{
              zIndex: 100001,
              padding: '8px',
              background: 'white',
              border: '2px solid black',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px 40px 40px 40px',
              overflow: 'auto'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              dangerouslySetInnerHTML={{ __html: mermaidRef.current?.innerHTML || '' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
