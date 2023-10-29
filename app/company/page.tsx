import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import CompanyAccess from "@/components/layouts/company/companyAccess";
import CompanyMain from "@/components/layouts/company/companyMain";
import CompanyTable from "@/components/layouts/company/companyTable";


export default function Company () {
    return(
        <>
            <CompanyMain/>
            <BorderPrimaryFull/>
            <CompanyTable/>
            <CompanyAccess/>
        </>
    )
}