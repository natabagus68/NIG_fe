import { config } from "@common/utils";
import { MaterialApiRepository } from "@data/api/material-api-repository";
import { Material, IMaterial } from "@domain/models/material";
import { PaginatedData } from "@domain/models/paginated-data";
import { MaterialRepository } from "@domain/repositories/material-repository";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useMaterial() {
    const materialRepository: MaterialRepository = new MaterialApiRepository();
    const navigate = useNavigate();
    const [deleteConfirmShow, setDeleteConfirmShow] = useState(false);
    const [material, setMaterial] = useState<PaginatedData<Material>>(
        PaginatedData.create<Material>({
            page: 0,
            limit: 0,
            lastPage: 0,
            data: [],
        })
    );
    const onAdd = () => {
        navigate(`${config.pathPrefix}master-data/material/create`);
    };
    const onEdit = (id: IMaterial["id"]) => {
        navigate(`${config.pathPrefix}master-data/material/${id}/edit`);
    };
    const onDelete = (id: IMaterial["id"]) => {
        setDeleteConfirmShow(true);
        setMaterial((prevMaterial) => {
            const material = PaginatedData.create<Material>(
                prevMaterial.unmarshall()
            );
            material.data.forEach((item) =>
                item.id == id ? item.check() : item.uncheck()
            );
            return material;
        });
    };
    const onConfirmDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await materialRepository.destroy(
            material.data.find((item) => item.checked).id
        );
        setDeleteConfirmShow(false);
        setMaterial((prevMaterial) => {
            const material = PaginatedData.create<Material>(
                prevMaterial.unmarshall()
            );
            material.data = material.data.filter((item) => !item.checked);
            return material;
        });
    };
    const onPageChange = (page: number) => {};
    useEffect(() => {
        materialRepository
            .get({ limit: material.limit, page: material.page })
            .then((result) => {
                return setMaterial(result);
            });
    }, []);
    return {
        material,
        onAdd,
        onEdit,
        onDelete,
        onConfirmDelete,
        onPageChange,
        deleteConfirmShow,
        setDeleteConfirmShow,
    };
}
