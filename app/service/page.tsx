import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import ServiceMain from "@/components/layouts/service/serviceMain";
import ServiceTimeline from "@/components/layouts/service/serviceTimeline";

export default function Service () {
    return(
        <>
            <ServiceMain/>
            <BorderPrimaryFull/>
            <ServiceTimeline/>
        </>
    )
}