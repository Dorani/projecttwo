import React from 'react';

const Character = ({ name, imgUrl, birth, death, race, realm, spouse }) => {
    return (
        <div data-test='component-character'>
            <h1 data-test='char-name'>{name}</h1>

            <img data-test='char-img' src={imgUrl} alt={name} />

            <ul data-test='char-list'>
                <li data-test='char-birth'>
                    Date of Birth: {birth}
                </li>
                <li data-test='char-death'>
                    Date of Death: {death}
                </li>
                <li data-test='char-race'>
                    Race: {race}
                </li>
                <li data-test='char-realm'>
                    Realm: {realm}
                </li>
                <li data-test='char-spouse'>
                    Spouse: {spouse}
                </li>
            </ul>
        </div>
    );
};

export default Character;