const CalculatorInputs = ({ fields, handleChange, inputs }) => {
	return (
		<div className='flex flex-col gap-4 w-full'>
			{fields.map((field) => (
				<div
					key={field.name}
					className='flex flex-col md:flex-row gap-3 border-b border-gray-700 pb-3 last:border-b-0'
				>
					<p className='hidden md:block w-1/3 text-sm font-light text-gray-300'>
						{field.question}
					</p>
					<div className='flex flex-col gap-1 w-full'>
						<label
							htmlFor={field.name}
							className='font-semibold text-sm text-gray-300'
						>
							{field.label}
						</label>
						<div className='flex items-center w-full gap-2'>
							<input
								type='range'
								name={field.name}
								min={0}
								max={field.max}
								step={field.step}
								value={inputs[field.name]}
								onChange={handleChange}
								className='w-full accent-[#ff8c02]'
							/>
							<div className='flex border border-gray-700 items-center rounded px-2 w-full md:w-fit bg-[#1c1c1c]'>
								{field.prefix && (
									<span className='text-xl font-bold text-[#ff8c02]'>
										{field.prefix}
									</span>
								)}
								<input
									type='number'
									name={field.name}
									onChange={handleChange}
									value={inputs[field.name]}
									className='w-full md:w-20 text-center text-white font-bold text-xl bg-transparent focus:outline-none'
								/>
								{field.suffix && (
									<span className='text-xl font-bold text-[#ff8c02]'>
										{field.suffix}
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CalculatorInputs;
