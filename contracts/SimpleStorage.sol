//SPDX-License-Identifier:MIT
pragma solidity ^0.8.20;

contract SimpleStorage{
    uint favoriteNumber;
    mapping(string=>uint) public nametofavorite;
    struct People{
        uint favoriteNumber;
        string name;
    }
    People[] public people;
    function store(uint _favoritenumber)public virtual{
        favoriteNumber=_favoritenumber;
    }
    function retrieve()public view returns(uint){
            return favoriteNumber;
    }
    function addPerson(string memory _name,uint _favoritenumber)public{
        people.push(People(_favoritenumber,_name));
        nametofavorite[_name]=_favoritenumber;
    }

}