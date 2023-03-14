import { AppStoreOptimizationBanner } from "../../components/AppStoreOptimization/AppStoreOptimizationBanner/AppStoreOptimizationBanner";
import { AppStoreOptimizationBrand } from "../../components/AppStoreOptimization/AppStoreOptimizationBrand/AppStoreOptimizationBrand";
import { AppStoreOptimizationCreate } from "../../components/AppStoreOptimization/AppStoreOptimizationCreate/AppStoreOptimizationCreate";
import { AppStoreOptimizationExpertise } from "../../components/AppStoreOptimization/AppStoreOptimizationExpertise/AppStoreOptimizationExpertise";
import { AppStoreOptimizationFeature } from "../../components/AppStoreOptimization/AppStoreOptimizationFeature/AppStoreOptimizationFeature";
import { AppStoreOptimizationPeriority } from "../../components/AppStoreOptimization/AppStoreOptimizationPeriority/AppStoreOptimizationPeriority";
import { AppStoreOptimizationSolution } from "../../components/AppStoreOptimization/AppStoreOptimizationSolution/AppStoreOptimizationSolution";

export default function AppStoreOptimization() {
    return (

        <div>
            <AppStoreOptimizationBanner />
            <AppStoreOptimizationBrand/>
            <AppStoreOptimizationFeature/>
            <AppStoreOptimizationCreate/>
            <AppStoreOptimizationPeriority/>
            <AppStoreOptimizationExpertise/>
            <AppStoreOptimizationSolution/>
        </div>
    )
}