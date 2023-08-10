import classNames from 'classnames'
import React from 'react'

type Props = {
    children: React.ReactNode
    classes?: {
        root?: string
        content?: string
    }
}

const ContentWrapper: React.FC<Props> = ({ children, classes }) => {
    return (
        <div className={classNames('px-[20px] ', classes?.root)}>
            <div className={classNames('mx-auto max-w-[1400px]  w-full',classes?.content)}>
                {children}
            </div>
        </div>
    )
}

export default ContentWrapper