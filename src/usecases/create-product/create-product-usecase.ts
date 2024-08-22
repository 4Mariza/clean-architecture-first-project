import { Usecase } from "../usecase"

export type CreateProductInputDto = {
    name: string
    price: string
}

export type CreateProductOutputDto = {
    id: string
}

export type CreateProductBuildDto = {

}

// export class CreateProductUsecase 
// implements Usecase<CreateProductInputDto, CreateProductOutputDto>{
//     private constructor()
// }