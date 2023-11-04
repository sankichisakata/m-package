import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import UseMap from "@/components/elements/useMap/useMap";

import CompanyAccess from "@/components/layouts/company/companyAccess";
import CompanyMain from "@/components/layouts/company/companyMain";
import CompanyMap from "@/components/layouts/company/companyMap";
import CompanyOverview from "@/components/layouts/company/companyOverview";


export default function Company () {
    return(
        <>
            <CompanyMain/>
            <BorderPrimaryFull/>
            <CompanyOverview/>
            <CompanyAccess/>
            <CompanyMap/>
            <UseMap/>
        </>
    )
}