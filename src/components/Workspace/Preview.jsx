const Preview = ({ value }) => {
    return (
        <div className="h-[50%] w-full">
            <iframe className="h-full w-full" srcDoc={value}></iframe>
        </div>
    );
}

export default Preview;