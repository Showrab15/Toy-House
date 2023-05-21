import React from 'react';
import dynamicTitle from '../../hooks/DynamicTitle';

const Blogs = () => {
    dynamicTitle('Blogs')

    return (
      <div>
          <div className='lg:mx-20 my-10'>
        <h1 className='title'>Welcome To Our Blog !!!</h1>
        <hr  className="long-line"/>
                <hr  className="short-line mb-4"/>

            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-orange-200 rounded-box ">
        <div className="collapse-title text-xl font-medium mb-2">Compare SQL and NoSQL databases?</div>
        <div className="collapse-content bg-black text-white my-4  font-bold"> 
          <p>Structured Query Language (SQL) ::: is a programming language that allows both technical and non-technically-minded users to query, manipulate, and change data in a relational database. Organized into columns and rows within a table, SQL databases use a relational model that work best with well-defined structured data, such as names and quantities, in which relations exist between different entities. Within a SQL database, tables are linked through "foreign keys" that form relations between different tables and fields, such as customers and orders or employees and departments.

NoSQL databases ::: are non-relational databases that store data in a manner other than the tabular relations used within SQL databases. While SQL databases are best used for structured data, NoSQL databases are suitable for structured, semi-structured, and unstructured data. As a result, NoSQL databases don't follow a rigid schema but instead have more flexible structures to accommodate their data-types. Furthermore, instead of using SQL to query the database, NoSQL databases use varying query languages (some don't even have a query language). 
          </p>
        </div>
      </div>

        <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-orange-200 rounded-box ">
        <div className="collapse-title text-xl font-medium mb-2">What is express js? What is Nest JS?</div>
        <div className="collapse-content bg-black text-white my-4  font-bold"> 
          <p>NestJS is a NodeJS framework that is used for building scalable server-side applications. With NestJS, you can have readable and predictable code, all thanks to TypeScript which makes it more popular. It is an extensible, progressive and versatile framework. In spite of API being stable in the case of ExpressJS, it cannot handle async/await functions. To avoid such issues, NestJS has taken place. And, ExpressJS is a fast NodeJS framework used to build web and mobile applications.</p>
        </div></div>
        <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-orange-200 rounded-box ">
        <div className="collapse-title text-xl font-medium mb-2">What is MongoDB aggregate and how does it work?</div>
        <div className="collapse-content bg-black text-white my-4  font-bold"> 
          <p>MongoDB method for performing advanced data processing and analysis operations on collections. It takes an array of stages as input, where each stage represents a specific data transformation or analysis operation. Stages are executed in order, passing the resulting data from one stage to the next. Common stages include filtering ($match), grouping ($group), projecting ($project), and sorting ($sort). Aggregation allows for complex data manipulations and provides a flexible way to extract insights from MongoDB collections.
          </p>
        </div>
      </div>
        <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-orange-200 rounded-box ">
        <div className="collapse-title text-xl font-medium mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
        <div className="collapse-content bg-black text-white my-4  font-bold"> 
          <p>Im can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.

Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them</p>
        </div>
      </div>
        </div>
      </div>
    );
};

export default Blogs;