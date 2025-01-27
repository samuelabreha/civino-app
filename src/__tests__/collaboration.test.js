import Collaboration from './collaboration';

describe('Collaboration', () => {
    it('should share a document', () => {
        const document = { title: 'Document 1' };
        Collaboration.shareDocument(document);
        expect(Collaboration.getSharedDocuments()).toContain(document);
    });

    it('should retrieve shared documents', () => {
        const document1 = { title: 'Document 1' };
        const document2 = { title: 'Document 2' };
        Collaboration.shareDocument(document1);
        Collaboration.shareDocument(document2);
        expect(Collaboration.getSharedDocuments()).toEqual([document1, document2]);
    });
});