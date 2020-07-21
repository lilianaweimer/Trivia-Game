import React from 'react';

const TeachersPets = () => {
    return (
        <section className='scoreboard'>
            <h2 className='scoreboard-title'>Teacher's Pets:</h2>
                <tr className='scoreboard-toprow'>
                    <td>Name</td>
                    <td>Score</td>
                </tr>
                <tr className='scoreboard-playerrow'>
                    <td>name 1</td>
                    <td>score 1</td>
                </tr>
                <tr>
                    <td>name 2</td>
                    <td>score 2</td>
                </tr>
                <tr>
                    <td>name 3</td>
                    <td>score 4</td>
                </tr>

            {/* <ul>
                <li>name 1: score 1</li>
                <li>name 2: score 2</li>
                <li>name 2: score 2</li>
            </ul> */}
        </section>
    )
}

export default TeachersPets;