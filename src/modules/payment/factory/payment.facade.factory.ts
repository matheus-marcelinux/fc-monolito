import PaymentFacadeInterface from "../facade/facade.interface";
import PaymentFacade from "../facade/payment.facade";
import TransactionRepository from "../repository/transaction.repository";
import processPaymentUseCase from "../usecase/process-payment/process-payment.usecase";

export default class PaymentFacadeFactory {
    static create() : PaymentFacadeInterface {
        const repository = new TransactionRepository();
        const usecase = new processPaymentUseCase(repository);
        const facade = new PaymentFacade(usecase);
        return facade;
    }
}