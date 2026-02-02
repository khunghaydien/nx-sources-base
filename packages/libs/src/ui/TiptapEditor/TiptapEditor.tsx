import { useEditor, EditorContent } from '@tiptap/react';
import type { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Button } from 'antd';
import {
    BoldOutlined,
    ItalicOutlined,
    StrikethroughOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
    UndoOutlined,
    RedoOutlined,
} from '@ant-design/icons';
import { forwardRef, useImperativeHandle } from 'react';
import './TiptapEditor.css';

interface TiptapEditorProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    id?: string;
}

export interface TiptapEditorRef {
    focus: () => void;
}

const TiptapEditor = forwardRef<TiptapEditorRef, TiptapEditorProps>(({
    value,
    onChange,
    placeholder = 'Nhập nội dung...',
    className = '',
    id,
}, ref) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Placeholder.configure({
                placeholder,
            }),
        ],
        content: value || '',
        onUpdate: ({ editor }: { editor: Editor }) => {
            const html = editor.getHTML();
            onChange?.(html);
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px] p-4',
            },
        },
    });

    useImperativeHandle(ref, () => ({
        focus: () => {
            setTimeout(() => {
                editor?.chain().focus().run();
            }, 0);
        },
    }));

    if (!editor) {
        return null;
    }

    return (
        <div id={id} className={`border border-gray-300 rounded-lg ${className}`}>
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
                <Button
                    type={editor.isActive('bold') ? 'primary' : 'default'}
                    size="small"
                    icon={<BoldOutlined />}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                />
                <Button
                    type={editor.isActive('italic') ? 'primary' : 'default'}
                    size="small"
                    icon={<ItalicOutlined />}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                />
                <Button
                    type={editor.isActive('strike') ? 'primary' : 'default'}
                    size="small"
                    icon={<StrikethroughOutlined />}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                />
                <div className="w-px h-6 bg-gray-300 mx-1" />
                <Button
                    type={editor.isActive('heading', { level: 1 }) ? 'primary' : 'default'}
                    size="small"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                >
                    H1
                </Button>
                <Button
                    type={editor.isActive('heading', { level: 2 }) ? 'primary' : 'default'}
                    size="small"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                >
                    H2
                </Button>
                <Button
                    type={editor.isActive('heading', { level: 3 }) ? 'primary' : 'default'}
                    size="small"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                >
                    H3
                </Button>
                <div className="w-px h-6 bg-gray-300 mx-1" />
                <Button
                    type={editor.isActive('bulletList') ? 'primary' : 'default'}
                    size="small"
                    icon={<UnorderedListOutlined />}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                />
                <Button
                    type={editor.isActive('orderedList') ? 'primary' : 'default'}
                    size="small"
                    icon={<OrderedListOutlined />}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                />
                <div className="w-px h-6 bg-gray-300 mx-1" />
                <Button
                    type="default"
                    size="small"
                    icon={<UndoOutlined />}
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                />
                <Button
                    type="default"
                    size="small"
                    icon={<RedoOutlined />}
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                />
            </div>

            {/* Editor Content */}
            <div className="bg-white rounded-b-lg">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
});

TiptapEditor.displayName = 'TiptapEditor';

export default TiptapEditor;
