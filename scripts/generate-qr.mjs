import { mkdir } from "node:fs/promises";
import QRCode from "qrcode";

const destinations = {
  whatsapp: "https://wa.me/4917662712091",
  facebook: "https://www.facebook.com/uebersetzer.otto.schuster",
  instagram: "https://www.instagram.com/ottoschuster.de",
  google: "https://search.google.com/local/writereview?placeid=ChIJ9wTZ8Qy4kEcRnmhw8CX44C8",
};

await mkdir("public/qr", { recursive: true });

for (const [name, destination] of Object.entries(destinations)) {
  await QRCode.toFile(`public/qr/${name}.svg`, destination, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 2,
    color: {
      dark: "#162F45",
      light: "#FFFFFF",
    },
  });
}

console.log(`Generated ${Object.keys(destinations).length} direct-destination QR codes.`);
