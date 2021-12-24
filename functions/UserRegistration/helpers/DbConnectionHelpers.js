"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.sequelizeConnection = void 0;
const sequelize_1 = require("sequelize");
exports.sequelizeConnection = new sequelize_1.Sequelize('VrishKarServices', 'postgres', 'mydevinstance', {
    host: 'vriskardevinstance.ccti2qfk3j7d.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
});
exports.connectDB = async () => {
    try {
        await exports.sequelizeConnection.authenticate();
        console.log("Successfully connected");
    }
    catch (error) {
        console.log("Connection error");
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJDb25uZWN0aW9uSGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRiQ29ubmVjdGlvbkhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXFDO0FBR3hCLFFBQUEsbUJBQW1CLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUM7SUFDM0YsSUFBSSxFQUFFLDZEQUE2RDtJQUNuRSxPQUFPLEVBQUUsVUFBVTtDQUN0QixDQUFDLENBQUE7QUFFVyxRQUFBLFNBQVMsR0FBRyxLQUFLLElBQUcsRUFBRTtJQUMvQixJQUFJO1FBQ0EsTUFBTSwyQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7S0FFeEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtLQUNsQztBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIlxuXG5cbmV4cG9ydCBjb25zdCBzZXF1ZWxpemVDb25uZWN0aW9uID0gbmV3IFNlcXVlbGl6ZSgnVnJpc2hLYXJTZXJ2aWNlcycsJ3Bvc3RncmVzJywnbXlkZXZpbnN0YW5jZScse1xuICAgIGhvc3Q6ICd2cmlza2FyZGV2aW5zdGFuY2UuY2N0aTJxZmszajdkLnVzLWVhc3QtMS5yZHMuYW1hem9uYXdzLmNvbScsXG4gICAgZGlhbGVjdDogJ3Bvc3RncmVzJ1xufSkgXG5cbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYygpID0+e1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNlcXVlbGl6ZUNvbm5lY3Rpb24uYXV0aGVudGljYXRlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZFwiKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIGVycm9yXCIpXG4gICAgfVxufSJdfQ==