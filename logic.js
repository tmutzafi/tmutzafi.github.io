const siteToUpdateInstance = 'XNdGY9GHABmuf_CU1z8KkXQYWegFXytIroB9cvLGgRo.eyJpbnN0YW5jZUlkIjoiN2JkY2RkNzctMmM2YS00M2QxLTgxY2EtZWY3MmY4ODIwM2E0IiwiYXBwRGVmSWQiOiIyMmJlZjM0NS0zYzViLTRjMTgtYjc4Mi03NGQ0MDg1MTEyZmYiLCJtZXRhU2l0ZUlkIjoiN2JkY2RkNzctMmM2YS00M2QxLTgxY2EtZWY3MmY4ODIwM2E0Iiwic2lnbkRhdGUiOiIyMDIyLTAzLTE2VDA3OjU3OjI5LjYzNFoiLCJ1aWQiOiI2ZDA1OWRkOC1hODM3LTQ3MTYtYjY5Ny1jYWExMDI4MTNlZjQiLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwiZGVtb01vZGUiOmZhbHNlLCJzaXRlT3duZXJJZCI6IjZkMDU5ZGQ4LWE4MzctNDcxNi1iNjk3LWNhYTEwMjgxM2VmNCIsInNpdGVNZW1iZXJJZCI6IjZkMDU5ZGQ4LWE4MzctNDcxNi1iNjk3LWNhYTEwMjgxM2VmNCIsImV4cGlyYXRpb25EYXRlIjoiMjAyMi0wMy0xNlQxMTo1NzoyOS42MzRaIiwibG9naW5BY2NvdW50SWQiOiI2ZDA1OWRkOC1hODM3LTQ3MTYtYjY5Ny1jYWExMDI4MTNlZjQifQ'


const createHeaders = Authorization => ({
    Authorization,
    'x-wix-route-document-management': 'tal3',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    Accept: 'application.json',
    'Content-Type': 'application/json'
})
const baseUrl = 'https://manage.wix.com/document-management/v1/'


async function getComps(instance, options) {
    const url = options.publishedRevision ? `${baseUrl}public/components/get` : `${baseUrl}components/get`
    const headers = createHeaders(instance)
    const response = await fetch(url, {headers, method: 'POST', body: JSON.stringify({
            "query": {"filter": {"pageId": options.pageId}}
        })})
    return await response.json()
}

const getCompsPublic = async () => {
    console.log('getCompsPublic getCompsPublic', res)

    const res = await getComps(siteToUpdateInstance, {publishedRevision: true, pageId: 'c1dmp'})
    console.log('RESSSSSS', res)
}

