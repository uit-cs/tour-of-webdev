const Preview = ({ value }) => {
    return (
        <div className="h-[50%] w-full">
            <iframe className="h-full w-full pointer-events-none" srcDoc={value}></iframe>
        </div>
    );
}

export default Preview;