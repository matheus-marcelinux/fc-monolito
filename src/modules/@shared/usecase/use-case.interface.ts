export default interface UseCaseInterface {
    execute(inout: any): Promise<any>;
}