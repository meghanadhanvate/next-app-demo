'use client'
import { useRouter } from "next/navigation";

export default function ButtonComponent() {
    const router = useRouter();

    const navigateToAbout = () => {
      router.push('/contact-us');
    };
    return(
        <button onClick={() => {navigateToAbout}} className="CTA-button" data-text="Awesome">
        <span className="actual-text">&nbsp;Get Started&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Get&nbsp;Started&nbsp;</span>
    </button>
    )
}