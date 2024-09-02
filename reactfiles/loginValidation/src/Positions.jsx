import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Positions = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [total, setTotal] = useState()
    const [limit, setLimit] = useState(10)
    const [childData, setChildData] = useState()

    const  handleDataFromPagination = (dataFromChild) => {
            setChildData(dataFromChild)
    }

    const handleUpArrowClick = (tableHeading) => {
        // console.log("tableHeading", tableHeading);
       let sortedData = [...allData].sort((a,b) => {
        // console.log("a[tableHeading]", a[tableHeading]);
        // console.log("b[tableHeading]", b[tableHeading]);

        if ( a[tableHeading] > b[tableHeading] ) {return 1}
        if ( a[tableHeading] < b[tableHeading] ) {return -1}
        return 0
       })
        setAllData(sortedData)
    }

    const handleDownArrowClick = (tableHeading) => {
        // console.log("tableHeading", tableHeading);        
        let sortedData = [...allData].sort((a, b) => {
            if (a[tableHeading] > b[tableHeading]) {return -1}
            if (a[tableHeading] < b[tableHeading]) {return 1;}
            return 0;
        });        
        setAllData(sortedData);
    }    
    
    useEffect(() => {
        const fetchProfile = async () => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const currentUser = users.find((user) => user.isLoggedIn === true);

            const requestData = {
                page: childData,
                limit: limit
            };

            try {
                const response = await fetch('https://api-dev.smoothire.com/api/v1/positions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentUser.token}`
                    },
                    body: JSON.stringify(requestData),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setTotal(data.result.totalDocs)
                setAllData(data.result.docs);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [childData]);

    // console.log("allData", allData);

    if (loading) {
        return <h1 className='httpError'>Loading...</h1>;
    }

    if (error) {
        return <h1 className='httpError'>Error: {error}</h1>;
    }

    return (
        <div className="mainDiv1">
            <h1><strong>Positions</strong></h1>
            <table>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Name
                            <button className='arrowBtn' onClick={() => handleUpArrowClick("name")}>
                                <img src='src\vecteezy_arrow-on-transparent-background_35910504.png' alt='image' height={20} width={20}/>
                            </button>
                            <button className='arrowBtn' onClick={() => handleDownArrowClick("name")}>
                                <img src='src\vecteezy_red-arrow-3d-red-arrow-3d-red-arrow-in-different-style-and_48409678.png' alt='image' height={22} width={20}/>
                            </button>
                        </th>
                        <th>Positions
                            <button className='arrowBtn' onClick={() => handleUpArrowClick("positionFor")}>
                                <img src='src\vecteezy_arrow-on-transparent-background_35910504.png' alt='image' height={20} width={20}/> 
                            </button>
                            <button className='arrowBtn' onClick={() => handleDownArrowClick("positionFor")}>
                                <img src='src\vecteezy_red-arrow-3d-red-arrow-3d-red-arrow-in-different-style-and_48409678.png' alt='image' height={22} width={20}/>
                            </button>
                        </th>
                        <th>Min Experience required
                            <button className='arrowBtn' onClick={() => handleUpArrowClick("minExpRequired")}>
                                <img src='src\vecteezy_arrow-on-transparent-background_35910504.png' alt='image' height={20} width={20}/>
                            </button>
                            <button className='arrowBtn' onClick={() => handleDownArrowClick("minExpRequired")}>
                                <img src='src\vecteezy_red-arrow-3d-red-arrow-3d-red-arrow-in-different-style-and_48409678.png' alt='image' height={22} width={20}/>
                            </button>
                        </th>
                        <th>Max Experience required
                            <button className='arrowBtn' onClick={() => handleUpArrowClick("maxExpRequired")}>
                                <img src='src\vecteezy_arrow-on-transparent-background_35910504.png' alt='image' height={20} width={20}/>
                            </button>
                            <button className='arrowBtn' onClick={() => handleDownArrowClick("maxExpRequired")}>
                                <img src='src\vecteezy_red-arrow-3d-red-arrow-3d-red-arrow-in-different-style-and_48409678.png' alt='image' height={22} width={20}/>
                            </button>
                        </th>
                        <th>Notice Period (Days)
                            <button className='arrowBtn' onClick={() => handleUpArrowClick("noticePeriodInDays")}>
                                <img src='src\vecteezy_arrow-on-transparent-background_35910504.png' alt='image' height={20} width={20}/>
                            </button>
                            <button className='arrowBtn' onClick={() => handleDownArrowClick("noticePeriodInDays")}>
                                <img src='src\vecteezy_red-arrow-3d-red-arrow-3d-red-arrow-in-different-style-and_48409678.png' alt='image' height={22} width={20}/>
                            </button>
                        </th>
                        <th>Status
                            <button className='arrowBtn' onClick={() => handleUpArrowClick("status")}>
                                <img src='src\vecteezy_arrow-on-transparent-background_35910504.png' alt='image' height={20} width={20}/>
                            </button>
                            <button className='arrowBtn' onClick={() => handleDownArrowClick("status")}>
                                <img src='src\vecteezy_red-arrow-3d-red-arrow-3d-red-arrow-in-different-style-and_48409678.png' alt='image' height={22} width={20}/>
                            </button>
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((data, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.positionFor}</td>
                            <td>{data.minExpRequired}</td>
                            <td>{data.maxExpRequired}</td>
                            <td>{data.noticePeriodInDays}</td>
                            <td>{data.status}</td>
                            <td><button className='btnAction'>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            < Pagination total={total} limit={limit} DataFromPagination={handleDataFromPagination} />
        </div>
    );
}

export default Positions;
