import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import CompanyMain from "@/components/layouts/company/companyMain";
import CompanyMap from "@/components/layouts/company/companyMap";
import CompanyTable from "@/components/layouts/company/companyTable";


export default function Company () {
    return(
        <>
            <CompanyMain/>
            <BorderPrimaryFull/>
            <CompanyTable/>
            <CompanyMap/>
        </>
    )
}