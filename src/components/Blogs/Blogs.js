import React from 'react';

const Blogs = () => {
    return (
        <div className="m-14">
            <div className="mb-12">
                <h3 className="mb-2 text-2xl">(1) What is the purpose of <span className="text-orange-500">Context API</span>?</h3>
                <p className="text-lg">Context API helps to share data between components which can not easily shared by props. For example: complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually every level.</p>
            </div>
            <div>
                <h3 className="mb-2 text-2xl">(2) What is <span className="text-orange-500">Semantic Tag</span>?</h3>
                <p className="text-lg">The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. The pages made with semantic elements are much easier to read. It has greater accessibility. It offers a better user experience.</p>
            </div>
        </div>
    );
};

export default Blogs;