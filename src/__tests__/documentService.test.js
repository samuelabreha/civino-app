import { uploadDocument, getUserDocuments, deleteDocument } from '../services/documentService';
import axios from 'axios';

jest.mock('axios');

describe('Document Service', () => {
    test('should upload document successfully', async () => {
        const documentResponse = { documentId: 1 };
        axios.post.mockResolvedValue({ data: documentResponse }); // Mock de la réponse

        const response = await uploadDocument({ userId: 1, fileName: 'test.pdf' });
        expect(response).toEqual(documentResponse);
    });

    test('should get user documents successfully', async () => {
        const documents = [{ id: 1, title: 'Document 1' }];
        axios.get.mockResolvedValue({ data: documents }); // Mock de la réponse

        const response = await getUserDocuments();
        expect(response).toEqual(documents);
    });

    test('should delete document successfully', async () => {
        axios.delete.mockResolvedValue({}); // Mock de la réponse

        const response = await deleteDocument(1);
        expect(response).toBeUndefined();
    });
});
