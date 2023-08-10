import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

type Props = {
    children: React.ReactNode
    // className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className, children, ...props }: Props) => {
    return (
        <button
        
            className={classNames('px-6 py-3 bg-[#40C29B] text-white hover:opacity-80 rounded-full disabled:opacity-80', className)}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button