export class ValidateFactory {
    public validReplys(value: any): boolean | Promise<boolean> {
        return Array.isArray(value) && value.reduce((a, b) => a && typeof b.content === 'string' && typeof b.writerName === 'string' && typeof b.thumbs === 'number' && typeof b.refUserId === 'number' && typeof b.refDetailId === 'number', true)
    }
    
    public validDetail(value: any): boolean | Promise<boolean> {
        return Array.isArray(value) && value.reduce((a, b) => a && typeof b.content === 'string' && typeof b.writerName === 'string' && typeof b.postId === 'number' && typeof b.thumbs === 'number' && this.validReplys(b.replys), true) 
    }
    
    public validatePost(value: any): boolean | Promise<boolean> {
        return Array.isArray(value) && value.reduce((a, b) => a && typeof b.content === 'string' && typeof b.refUserId === 'number' && typeof b.writerName === 'string' && typeof b.title === 'string' && this.validDetail(b.postDetail), true)
    }
}