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


def unit_clusters(person_households, unit_of_person, source):
    """Each unit's cluster: the source household of the one household its members share.

    unit_of_person holds each person's unit index from 0, as policyengine-core's
    members_entity_id does, so the result follows the order of the unit's own arrays.
    source maps each household id to its source household. A unit whose members sit in
    two households has no one source, so it stops the run.
    """
    count = int(unit_of_person.max()) + 1
    low, high = np.full(count, np.inf), np.full(count, -np.inf)
    np.minimum.at(low, unit_of_person, person_households)
    np.maximum.at(high, unit_of_person, person_households)
    if not (low == high).all():
        raise ValueError("a unit spans households")
    return source.loc[low.astype(np.int64)].to_numpy()
