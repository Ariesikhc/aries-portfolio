# Cara Mengganti Foto Profil

## Option 1: Menggunakan Image File (Recommended)

1. **Siapkan foto profil Anda** (JPG atau PNG)
   - Recommended size: 400×400px atau lebih besar
   - Pastikan foto adalah square (1:1 aspect ratio)
   - File size: kurang dari 500KB untuk optimal loading

2. **Letakkan foto di folder yang tepat:**
   ```
   public/images/profile/your-photo.jpg
   ```

3. **Update file `src/app/page.tsx`**
   
   Cari bagian ini:
   ```jsx
   <Image
     src="/images/profile/profile-placeholder.svg"
     alt="Aries Ikhciar - Profile"
     fill
     className="object-cover"
     priority
   />
   ```

   Ganti dengan:
   ```jsx
   <Image
     src="/images/profile/your-photo.jpg"
     alt="Aries Ikhciar - Profile"
     fill
     className="object-cover"
     priority
   />
   ```

---

## Option 2: Menggunakan URL External (dari cloud storage)

Jika foto Anda di Google Drive, Dropbox, atau service lain:

```jsx
<Image
  src="https://example.com/your-photo.jpg"
  alt="Aries Ikhciar - Profile"
  fill
  className="object-cover"
  priority
/>
```

**Catatan:** Pastikan URL bersifat public dan tidak expired.

---

## Option 3: Menggunakan Placeholder Berbeda

Jika ingin menggunakan placeholder SVG custom:

1. Buat file SVG baru di `public/images/profile/custom-placeholder.svg`
2. Update path di page.tsx ke file baru tersebut

---

## Tips untuk Hasil Terbaik

✅ **Foto berkualitas tinggi** - HD atau 4K
✅ **Foto portrait** - Dekat dengan wajah/bahu
✅ **Lighting bagus** - Terang dan profesional
✅ **Background netral** - Putih, abu-abu, atau semi-blurred
✅ **Aspect ratio 1:1** - Perfectly square

---

## Testing Responsivitas

Setelah update foto, test di berbagai device:

- **Mobile (375px)**: Foto harus centered dan full-width
- **Tablet (768px)**: Foto sampingkanan text
- **Desktop (1440px)**: Foto besar di sisi kanan

Foto akan automatically scale di semua device! 📱💻🖥️
