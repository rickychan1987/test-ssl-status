import xlsx, {IJsonSheet} from 'json-as-xlsx'
import { sc_brand } from '@/sc'

export function downloadExcel() {
    let columns:IJsonSheet [] = [
        {
            sheet: "Certificate",
            columns: [
                {label: "Domain Name", value: "domain_name"},
                {label: "Valid Date", value: "valid_date"},
                {label: "Expire Date", value: "expire_date"},
                {label: "Remain Days", value: "remain_days"},
                {label: "Issuer", value: "issuer"},
                {label: "Last Check", value: "last_check"},
                {label: "Ip Server", value: "ip_server"},
            ],
            content: sc_brand
        },
    ];

    let settings = {
        fileName: "SSL Certificate",
    };

    xlsx(columns, settings)

}