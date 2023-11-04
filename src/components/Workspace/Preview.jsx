const Preview = ({ value }) => {
    return (
        <div className="h-[calc(50%-2px)] bg-white">
            <iframe title="preview" className="h-full w-full pointer-events-none" srcDoc={value}></iframe>
        </div>
    );
}

export default Preview;