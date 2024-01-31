import React, { useEffect, useRef, useState } from 'react'

const RadiationModal = ({ show, onHide, imgUrl }) => {
	const [loading, setLoading] = useState(true)

	const modalRef = useRef(null)

	useEffect(() => {
		if (show && modalRef.current) {
			modalRef.current.focus()
		}
	}, [show])

	const handleImageLoad = () => {
		setLoading(false)
	}

	const handleKeyDown = event => {
		if (event.key === 'Escape') {
			onHide()
		}
	}

	console.log('Rendering RadiationModal', { show, imgUrl })

	return show ? (
		<div
			className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50${
				show ? ' block' : ' hidden'
			}`}
			onClick={onHide}
			onKeyDown={handleKeyDown}
			tabIndex='0'
			ref={modalRef}
		>
			<div className='bg-white' onClick={e => e.stopPropagation()}>
				{loading ? (
					<div className='spinner-border text-primary' role='status'>
						<span className='sr-only'>Loading...</span>
					</div>
				) : null}
				<img
					src={imgUrl}
					alt='Radiation pattern'
					onLoad={handleImageLoad}
					className='w-72 h-72 object-contain mx-auto'
				/>
			</div>
		</div>
	) : null
}

export default RadiationModal
