const path = require("path");

module.exports = {
    // 1. Cong mang giao dien lap trinh Flow
    uiPort: process.env.PORT || 2200,

    // 2. Chia se file tinh (chua bando.html, anh, tai lieu PDF, Excel...)
    // Cac file dat trong UserData\public se truy cap qua http://localhost:1880/ten_file
    httpStatic: path.join(__dirname, 'public'),

    // 3. Tuyen duong goc cho giao dien lap trinh
    httpAdminRoot: '/',

    // 4. Cho phep thiet lap them duong dan Endpoint API
    httpNodeRoot: '/',

    // 5. Thu muc luu tru du lieu (Flows, Credentials, Packages)
    userDir: __dirname,

    // 6. Luu file flow chinh
    flowFile: 'flows.json',
    flowFilePretty: true,

    // 7. Thiet lap he thong log
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },

    // 8. Cấu hình Runtime Context
    contextStorage: {
        default: {
            module: "localfilesystem"
        }
    },

    // 9. Do dai chuoi JSON toi da khi truyen nhan qua HTTP
    apiMaxLength: '50mb',

    // 10. Gioi han module Node-RED Function
    functionGlobalContext: {
        // Co the them cac module tien ich tai day
    },

    // 11. HMI / Editor Settings
    editorTheme: {
        projects: {
            enabled: false
        },
        header: {
            title: "Hệ Thống Tự Động Hóa & SCADA"
        }
    }
};
