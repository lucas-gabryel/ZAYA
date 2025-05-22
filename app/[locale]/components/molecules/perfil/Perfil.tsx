import React from "react";
import { Icon } from "../../atoms/icon/Icon";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "../../atoms/link/Link";

export default function Perfil(){
    return (
        <>
            <Link href="/perfil">
                <Icon icon={IoPersonOutline} size={24} className="text-white" />
            </Link>
        </>
    )
}