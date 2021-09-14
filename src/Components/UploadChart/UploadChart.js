import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const UploadChart = () => {

    const [manageImage, setmanageImage] = useState([]);
    console.log('chart', manageImage)

    useEffect(() => {
        fetch('http://localhost:5000/picturs')
            .then(res => res.json())
            .then(data => {
                setmanageImage(data);

            })
    }, [])
    //console.log('total', total.uploadDate)
    //total.uploadDate.getTime() === today.getTime()
    const today = new Date(new Date().valueOf());
    const second = new Date((new Date()) - 1000 * 60 * 60 * 24);
    const third = new Date(new Date() - 86400000 * 2);
    const fourth = new Date(new Date() - 86400000 * 3);
    const fifth = new Date(Date.now() - 86400000 * 4);
    const sixth = new Date(Date.now() - 86400000 * 5);
    const seventh = new Date(Date.now() - 86400000 * 6);
    console.log('today', second.toLocaleDateString())
    const upload1 = manageImage.filter(total => total.uploadDate === today.toLocaleDateString()).length;
    const upload2 = manageImage.filter(total => total.uploadDate === second.toLocaleDateString()).length;
    const upload3 = manageImage.filter(total => total.uploadDate === third.toLocaleDateString()).length;
    const upload4 = manageImage.filter(total => total.uploadDate === fourth.toLocaleDateString()).length;
    const upload5 = manageImage.filter(total => total.uploadDate === fifth.toLocaleDateString()).length;
    const upload6 = manageImage.filter(total => total.uploadDate === sixth.toLocaleDateString()).length;
    const upload7 = manageImage.filter(total => total.uploadDate === seventh.toLocaleDateString()).length;

    return (
        <div>
            <Bar
                data={{
                    labels: [seventh, sixth, fifth, fourth, third, second, today],
                    datasets: [
                        {
                            label: 'Meme upload last 7days',
                            data: [upload7, upload6, upload5, upload4, upload3, upload2, upload1],
                            // data: [10, 20, 30, 40, 50, 60],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        },

                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 25,
                        },
                    },
                }}
            />
        </div>
    );
};

export default UploadChart;