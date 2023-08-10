import React from 'react'

type Props = {
    className?: string
    icon: "burger" | "close" | "list" | "message"
}

const icons = {
    burger: () => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M4 5.33331H28V7.99998H4V5.33331ZM4 14.6666H28V17.3333H4V14.6666ZM4 24H28V26.6666H4V24Z" fill="white" />
            </g>
        </svg>
    ),
    message: () => (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M3.75 3.75H26.25C26.9404 3.75 27.5 4.30965 27.5 5V25C27.5 25.6904 26.9404 26.25 26.25 26.25H3.75C3.05965 26.25 2.5 25.6904 2.5 25V5C2.5 4.30965 3.05965 3.75 3.75 3.75ZM25 9.0474L15.0898 17.9225L5 9.01993V23.75H25V9.0474ZM5.63932 6.25L15.0774 14.5775L24.3762 6.25H5.63932Z" fill="#47D7AC" />
            </g>
        </svg>
    ),
    close: () => (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame">
                <path id="Vector" d="M16.0009 14.1153L22.6005 7.51562L24.4861 9.40124L17.8865 16.0009L24.4861 22.6005L22.6005 24.4861L16.0009 17.8865L9.40124 24.4861L7.51562 22.6005L14.1153 16.0009L7.51562 9.40124L9.40124 7.51562L16.0009 14.1153Z" fill="currentColor" />
            </g>
        </svg>
    )
}

function Icon({ icon, className }: Props) {
    // @ts-ignore
    const Icon = icons[icon] || 'div'

    return (
        <Icon className={className} />
    )
}

export default Icon