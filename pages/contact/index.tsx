export default function Contact() {
	return (
		<div className="flex justify-center mt-5">
			<div className="flex flex-col items-center w-[80vw] max-w-[1000px]">
				<h1>Contact Me</h1>
				<p className="text-center">
					I'm always open for a conversation, about technology, Stoke City, or anything!
					Feel free to contact me using any of the methods below (as a word warning, my conversations 
					about Stoke City aren't normally very happy 🙁).
				</p>
				<h2 className="mt-20 font-bold text-l">
						Email
				</h2>
				<p className="mt-5">
						adam.barr AT outlook.com
				</p>
				<h2 className="mt-16 font-bold text-l">
						LinkedIn
				</h2>
				<p className="mt-5 underline hover:no-underline text-center">
						<a href="https://www.linkedin.com/in/barr-adam/">https://www.linkedin.com/in/barr-adam/</a>
				</p>
			</div>
		</div>
	)
}