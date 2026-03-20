import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackToTopButtom() {

    const [backToTopButtom, setBackToTopButtom] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 700) {
                setBackToTopButtom(true);
            } else {
                setBackToTopButtom(false);
            }
        });
    });

    function scrollUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTopButtom &&
            <Button
                variant="default"
                size="icon"
                className="fixed bottom-8 right-8 size-14 border-4 border-white"
                onClick={scrollUp}
            >
                <ArrowUp className="size-12"/>
            </Button>}
        </>
    )
}
