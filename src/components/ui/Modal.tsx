import classNames from 'classnames'
import Image from 'next/image'
import * as React from 'react'
import ReactDom from 'react-dom'
import Icon from './Icon'
import styles from './Modal.module.scss'

interface ModalBaseProps {
	children: React.ReactElement
	open?: boolean
	onClose?: () => void
	classes?: {
		root?: string
		overlay?: string
	}
}

const ModalBase: React.FC<ModalBaseProps> = ({
	open,
	children,
	onClose = () => { },
	classes,
}) => {
	const portal = React.useRef<HTMLDivElement | null>(null)
	const refOuter = React.useRef<HTMLDivElement | null>(null)
	const refFirstFocusable = React.useRef<HTMLElement | null>(null)
	const refLastFocusable = React.useRef<HTMLElement | null>(null)

	React.useEffect(() => {
		const focusableElements = Array.from<HTMLElement>(
			refOuter.current?.querySelectorAll('[tabindex]') ?? []
		)

		refFirstFocusable.current = focusableElements[0]
		refLastFocusable.current = focusableElements[focusableElements.length - 1]

		document.body.style.overflow = open ? "hidden" : 'initial'
		// eslint-disable-next-line
	}, [open])

	React.useEffect(() => {
		portal.current = document.getElementById('portal') as HTMLDivElement
	}, [])

	const onKeyDown = React.useCallback(
		(e: React.KeyboardEvent) => {
			if (
				document.activeElement === refLastFocusable.current &&
				e.key === 'Tab' &&
				!e.shiftKey
			) {
				e.preventDefault()
				refFirstFocusable.current?.focus()
			}
			if (
				document.activeElement === refFirstFocusable.current &&
				e.key === 'Tab' &&
				e.shiftKey
			) {
				e.preventDefault()
				refLastFocusable.current?.focus()
			}

			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)

	if (!open || !portal.current) return null

	return ReactDom.createPortal(
		<div
			ref={refOuter}
			onKeyDown={onKeyDown}
			className={classNames('absolute z-[200] w-full h-full flex items-center justify-center px-4')}
		>
			<div className={classNames('fixed inset-0  bg-[rgba(0,0,0,0.4)] ', classes?.overlay)} />
			<div className='p-14 max-md:p-4 bg-[#E1FFF6] relative rounded-[30px] w-full max-w-[450px]'>
				<button onClick={onClose} className='flex items-center justify-center absolute right-2 top-2 w-10 h-10 text-secondary'>
					{/* <Image height={30} width={30} src='/img/icons/close.svg' alt="mail" /> */}
					<Icon icon='close'/>
				</button>
				{children}
			</div>
		</div>,
		portal.current
	)
}

export default ModalBase
