import React from "react";
import { Icon } from "../../atoms/icon/Icon";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "@/i18n/navigation";


export default function Carrinho() {
    return (
        <>
            <Link href="/carrinho">
                <Icon icon={IoBagOutline} size={24} className="text-white"/>
            </Link>
        </>
    )
}