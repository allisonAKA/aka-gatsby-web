import React from "react"

import {
    FaTwitterSquare as IconTwitter,
    FaWikipediaW as IconWikipedia,
    FaRegLaughBeam as IconHumor, // humor
    FaTransgenderAlt as IconTrans,
    FaVenusDouble as IconLez,

} from "react-icons/fa"

import {
    GiPianoKeys as IconPiano, // music
    GiBrain as IconBrain,  // psych
    GiSlaveryWhip as IconKink, //kink
    GiSwordwoman as IconFemale, // strong female
    GiFemaleLegs as IconFashion, // fashion
} from "react-icons/gi"

import {
    TiEdit as IconWriting,
    TiInfoOutline as IconInfo,
    TiVolumeUp as IconRlrclc, // rlrclc
    TiSocialFacebook as IconFacebook,
} from "react-icons/ti"

import {
    DiGithubAlt as IconGithub,
} from "react-icons/di"

import {
    MdEmail as IconEmail,
} from "react-icons/md"

import { Link } from "gatsby"

const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            <a className="text-success ml-4"
                href="/about">
                <span title="About">
                    <IconInfo size={60} style={{ color: "success" }} />
                </span>
            </a>
            <a className="text-light ml-4"
                href="/about">
                <span title="Writing">
                    <IconWriting size={60} style={{ color: "light" }} />
                </span>
            </a>
            <a className="text-info ml-4"
                href="/about">
                <span title="Transgender">
                    <IconTrans size={60} style={{ color: "info" }} />
                </span>
            </a>
            <a className="text-danger ml-4"
                href="/about">
                <span title="Lesbian">
                    <IconLez size={60} style={{ color: "danger" }} />
                </span>
            </a>
            <a className="text-success ml-4"
                href="/about">
                <span title="Feminism">
                    <IconFemale size={60} style={{ color: "success" }} />
                </span>
            </a>
            <a className="text-primary ml-4"
                href="/about">
                <span title="Fashion">
                    <IconFashion size={60} style={{ color: "primary" }} />
                </span>
            </a>
            <a className="text-warning ml-4"
                href="/about">
                <span title="Kink">
                    <IconKink size={60} style={{ color: "warning" }} />
                </span>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className="text-light ml-4"
                href={contacts.facebook}>
                <span title="Facebook">
                    <IconFacebook size={60} style={{ color: "light" }} />
                </span>
            </a>
            <a className="text-light ml-4"
                href={contacts.twitter}>
                <span title="Twitter">
                    <IconTwitter size={60} style={{ color: "light" }} />
                </span>
            </a>
            <a className="text-light ml-4"
                href={contacts.email}>
                <span title="Email">
                    <IconEmail size={60} style={{ color: "light" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks