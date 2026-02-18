# create-checkout-page.ps1
$path = "src/pages/checkout.tsx"

$content = @"
'use client';
import PaymentOptions from '../components/PaymentOptions';

export default function CheckoutPage() {
    const studentId = 'STUDENT123';
    const courseId = 'COURSE456';
    const amount = 5000; # amount in cents

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <PaymentOptions studentId={studentId} courseId={courseId} amount={amount} />
        </div>
    );
}
"@

# Create the file and directories if needed
$dir = Split-Path $path
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force }

Set-Content -Path $path -Value $content
Write-Host "Checkout page created at $path"
