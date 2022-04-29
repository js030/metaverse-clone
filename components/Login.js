/** @format */

import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
	const { authenticate } = useMoralis()

	return (
		<div className='bg-black relative text-white'>
			<div
				className='flex flex-col absolute z-50 h-4/6 items-center w-full justify-center
            space-y-4'>
				<Image
					className='object-cover rounded-full'
					src='https://www.hollywoodreporter.com/wp-content/uploads/2021/10/Mutant-Demon-Ape-Credit-0xb1-copy-H-2021.jpg?w=681&h=383&crop=1'
					height={200}
					width={200}
				/>
				<button
					onClick={authenticate}
					className='bg-green-600 rounded-lg p-5 font-bold animate-pulse'>
					Login to the METAVERSE
				</button>
			</div>

			<div className='w-full h-screen'>
				<Image
					src='https://links.papareact.com/55n'
					layout='fill'
					objectFit='cover'
				/>
			</div>
		</div>
	)
}
export default Login
