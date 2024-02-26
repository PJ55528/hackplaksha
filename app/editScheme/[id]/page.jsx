import EditSchemeForm from "@/components/EditSchemeForm";

const getSchemeById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/schemes/${id}`,{
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("failed to fetch scheme");
        }

        return res.json();
    } catch (error){
        console.log(error);
    }
};


export default async function EditScheme({params}) {
    const {id} = params;
    const {scheme} = await getSchemeById(id);
    const {title, description} = scheme;
   
    return <EditSchemeForm id={id} title={title} description={description} />;
}
