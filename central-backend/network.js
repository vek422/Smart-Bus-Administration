import os from "os";
const networkInterfaces = os.networkInterfaces();

export default function getIpAddress() {
  for (const interfaceName in networkInterfaces) {
    for (const address of networkInterfaces[interfaceName]) {
      if (
        address.family === "IPv4" &&
        !address.internal &&
        interfaceName === "WiFi"
      ) {
        return address.address;
      }
    }
  }
}
