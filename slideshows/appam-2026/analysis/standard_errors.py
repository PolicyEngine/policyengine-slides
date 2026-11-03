"""Standard errors of weighted totals and ratios, clustered by household."""

import numpy as np


def total_se(values, clusters):
    """Standard error of a weighted total. The values already carry their weights."""
    _, index = np.unique(clusters, return_inverse=True)
    totals = np.bincount(index, weights=values)
    count = len(totals)
    return float(np.sqrt(count / (count - 1) * np.sum((totals - totals.mean()) ** 2)))


def ratio_se(numerator, denominator, clusters):
    """A ratio of weighted totals and its linearized standard error."""
    ratio = numerator.sum() / denominator.sum()
    residuals = (numerator - ratio * denominator) / denominator.sum()
    return float(ratio), total_se(residuals, clusters)
