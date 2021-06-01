import homepage from "./homepage/homepage";
import faqComponent from "./faqComponent/faqComponent";
import footerComponent from "./footerComponent/footerComponent";
import heroComponent from "./heroComponent/heroComponent";
import featuresComponent from "./featuresComponent/featuresComponent";
import additionalFeaturesComponent from "./additionalFeaturesComponent/additionalFeaturesComponent";

/**
 *
 * @param value
 * @returns {*}
 */
export function checkObjectsInMap(value) {

    if (homepage.setObjects().has(`${value}`)) {
        return homepage.setObjects().get(`${value}`)
    }

    if (faqComponent.setObjects().has(`${value}`)) {
        return faqComponent.setObjects().get(`${value}`)
    }

    if (footerComponent.setObjects().has(`${value}`)) {
        return footerComponent.setObjects().get(`${value}`)
    }

    if (heroComponent.setObjects().has(`${value}`)) {
        return heroComponent.setObjects().get(`${value}`)
    }

    if (featuresComponent.setObjects().has(`${value}`)) {
        return featuresComponent.setObjects().get(`${value}`)
    }

    if (additionalFeaturesComponent.setObjects().has(`${value}`)) {
        return additionalFeaturesComponent.setObjects().get(`${value}`)
    }
}
