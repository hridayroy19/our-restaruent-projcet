/* eslint-disable react/prop-types */


const SectionTitile = ({heading ,subHeading}) => {
    return (
        <div>
            <p className="text-black">{subHeading}</p>
            <h3>{heading} </h3>
        </div>
    );
};

export default SectionTitile;