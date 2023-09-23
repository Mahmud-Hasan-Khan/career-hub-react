

const DisplayJobCategory = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className='my-bg-color pl-10 pt-10 pb-10 mx-10 rounded-lg'>
            <img src={logo} alt="" className='object-cover p-4 my-jobCategory-img-bg-color' />
            <h4 className='text-xl font-extrabold text-[#474747] pt-4'>{category_name}</h4>
            <p className='text-base text-[#A3A3A3] font-semibold pt-2'>{availability}</p>
        </div >
    );
};

export default DisplayJobCategory;