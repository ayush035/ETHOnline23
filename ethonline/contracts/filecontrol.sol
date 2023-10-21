pragma solidity ^0.8.0;

contract FileAccessControl {
    address public owner;
    mapping(address => bool) public authorizedUsers;
    mapping(address => bool) public biometricAuthenticatedUsers;

    event FileAccessGranted(address indexed user);
    event BiometricAuthenticated(address indexed user);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyAuthorizedUser() {
        require(authorizedUsers[msg.sender], "Unauthorized user");
        _;
    }

    modifier onlyBiometricAuthenticatedUser() {
        require(biometricAuthenticatedUsers[msg.sender], "Biometric authentication required");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function grantAccess(address _user) external onlyOwner {
        authorizedUsers[_user] = true;
        emit FileAccessGranted(_user);
    }

    function authenticateBiometric() external onlyAuthorizedUser {
        // Perform biometric authentication off-chain
        // Assuming authentication successful
        biometricAuthenticatedUsers[msg.sender] = true;
        emit BiometricAuthenticated(msg.sender);
    }

    function accessFile() external onlyBiometricAuthenticatedUser {
        // Perform file access logic here
        // This function can be modified to return the file contents or perform any desired action
        // For simplicity, let's assume file access is granted if biometric authentication is successful
    }
}
