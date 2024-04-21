import Image from "next/image";


export default function MdxLayout({ children }: { children: React.ReactNode }) {

	return (
	<div className="flex w-full flex-col items-center mt-10">
		<h1>Title</h1>
		<div className="text-left w-[80vw] max-w-[1000px]">
			{children}
		</div>
	</div>
	)
}