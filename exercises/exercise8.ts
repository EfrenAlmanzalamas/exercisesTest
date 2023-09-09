
export function age(planet: unknown, seconds: unknown): number {
    const rSeconds = Number(String(seconds).replace(/[^0-9.-]/g, ''));
    const rPlanet: string = String(planet);
    if (!(rPlanet.toLowerCase() in RELATION_PLANET)) {
        throw new Error(`${planet} is not a valid planet`);
    }
    const planetRelation = RELATION_PLANET[rPlanet.toLowerCase()];

    const ageInYears = rSeconds / (SECONDS_IN_EARTH_YEAR * planetRelation);

    return parseFloat(ageInYears.toFixed(2));
}

const SECONDS_IN_EARTH_YEAR = 31557600;

const RELATION_PLANET: { [planet: string]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
};
