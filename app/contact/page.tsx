import ContactForm from "@/components/layouts/contact/contactForm";
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'お問い合わせ',
    description: 'お問い合わせ | 埼玉県川口市の梱包材企業：段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
}

export default function Contact () {
    return(
        <>
            <ContactForm/>
        </>
    )
    
}